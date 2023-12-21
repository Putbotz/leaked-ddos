package main

import (
	"fmt"
	"github.com/valyala/fasthttp"
	"os"
	"strconv"
	"time"
)

func main() {
	// Menerima argumen command-line
	if len(os.Args) != 4 {
		fmt.Println("Usage: go run main.go <url> <port> <time_in_seconds>")
		return
	}

	url := os.Args[1]
	port := os.Args[2]
	duration, err := strconv.Atoi(os.Args[3])
	if err != nil {
		fmt.Println("Invalid duration:", err)
		return
	}

	// Menggabungkan URL dan port untuk membentuk alamat tujuan
	destAddr := fmt.Sprintf("%s:%s", url, port)

	// Memulai waktu
	startTime := time.Now()

	// Loop untuk mengirim permintaan setiap detik selama durasi yang ditentukan
	for {
		// Membuat permintaan GET menggunakan fasthttp
		statusCode, body, err := fasthttp.Get(nil, destAddr)
		if err != nil {
			fmt.Println("Error sending request:", err)
			return
		}

		// Menampilkan informasi respon
		fmt.Printf("Status Code: %d, Response Body: %s\n", statusCode, body)

		// Menghentikan loop jika waktu berlalu
		if time.Since(startTime).Seconds() >= float64(duration) {
			break
		}

		// Menunggu 1 detik sebelum mengirim permintaan berikutnya
		time.Sleep(time.Second)
	}
}
