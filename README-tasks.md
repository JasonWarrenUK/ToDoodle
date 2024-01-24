# Sections to Include

## Title

- [x] Write a Title

## Description

- [ ] Write a couple of sentences to explain exactly what the project is
  - Don't minimise it

- Example 1: Zipzod
   > This is zipzod! A command-line tool for zipping and unzipping files with an ultra low memory footprint.

- Example 2: [go-rabbitmq](https://github.com/wagslane/go-rabbitmq)
   > Wrapper of rabbitmq/amqp091-go that provides reconnection logic and sane defaults

- Example 3: [bubbletea](https://github.com/charmbracelet/bubbletea)
   > The fun, functional and stateful way to build terminal apps.
   > A Go framework based on The Elm Architecture.
   > Bubble Tea is well-suited for simple and complex terminal applications, either inline, full-window, or a mix of both.

- [ ] Include a screenshot
  - [ ] Make notes from the [bubbletea repo](https://github.com/charmbracelet/bubbletea)

## Why?

- [ ] Write a paragraph or two to describe why someone should care about your project.
   - This is about the Motivation/Goal/Problem to Solve
   - The description section was about the "what", this is the "why".

- Template
  > I had problem A and I tried B but it didn't work because C. I built D and now I can do E with ease!

- Example 1: Zipzod
   > There are a lot of ways to zip and unzip files, but none of them use so little memory!
   > Zipzod is the zipping tool you need for working on low-memory devices like Raspberry Pis.
   > I use a Raspberry Pi as a home server, and I was frustrated by my inability to easily manage large files on a small device, so I built zipzod.

- Example 2: [htmx](https://github.com/bigskysoftware/htmx)
   > * Why should only <a> and <form> be able to make HTTP requests?
   > * Why should only click & submit events trigger them?
   > * Why should only GET & POST be available?
   > * Why should you only be able to replace the entire screen?
   > 
   > By removing these arbitrary constraints htmx completes HTML as a hypertext

- Example 3: [python-websockets](https://github.com/python-websockets/websockets)
   > The development of websockets is shaped by four principles:
   > 
   > * Correctness: websockets is heavily tested for compliance with RFC 6455. Continuous integration fails under 100% branch coverage.
   > * Simplicity: all you need to understand is msg = await ws.recv() and await ws.send(msg). websockets takes care of managing connections so you can focus on your application.
   > * Robustness: websockets is built for production. For example, it was the only library to handle backpressure correctly before the issue became widely known in the Python community.
   > * Performance: memory usage is optimized and configurable. A C extension accelerates expensive operations. It's pre-compiled for Linux, macOS and Windows and packaged in the wheel format for each system and Python version.

## Feature List

- [x] Write an initial Feature List
- [ ] Add all features

## Quick Start

- [ ] Write a Quick Start
- [ ] Copy and paste the section from [discordgo](https://github.com/bwmarrin/discordgo) into Example 3
- [ ] Copy and paste the installing section from [discord.py](https://github.com/Rapptz/discord.py) into Example 4
- [ ] Copy and paste the quick example section from [discord.py](https://github.com/Rapptz/discord.py) into Example 4

- Example 1: Zipzod
  ````
  ## 🚀 Quick Start
  
  ### Install zipzod using the Go toolchain
  
  ```bash
  go install github.com/xyz/zipzod@latest
  ```
  
  ## Run zipzod with an input directory and an output file
  
  ```bash
  zipzod -i ./input -o ./output.zip
  ```
  ````

- Example 2: Server-Deployed Project
   ````
   ## 🚀 Quick Start
  
  Navigate to [zipzod.xyz](https://zipzod.xyz) and upload your file!
  
  You'll get a download link when it's done.
   ````

- Example 3: [discordgo](https://github.com/bwmarrin/discordgo)

- Example 4: [discord.py](https://github.com/Rapptz/discord.py)

## Usage

- [ ] Write a Usage section

- Example 1: Zipzod
  ````
  ## 📖 Usage
  
  Available flags:
  
  * `-i` - The input file or directory
  * `-o` - The output file or directory
  * `-v` - Verbose output
  * `-h` - Show help
  * `-p` - The number of parallel workers to use (default 4)
  * `-d` - The maximum depth to traverse (default 1)
  * `-f` - The file extensions to include (default .txt, .md)
  
  ## Examples
  
  Unzip a file
  
  ```bash
  zipzod -i ./input.zip -o ./output
  ```
  
  Zip with a different number of workers
  
  ```bash
  zipzod -i ./input -o ./output.zip -p 8
  ```
  ````

## Contributing

- [ ] Write a Contributing section
- [ ] Copy and paste the section from [go-rabbitmq](https://github.com/wagslane/go-rabbitmq) as Example 
- [ ] Copy and paste the section from [bubbletea](https://github.com/charmbracelet/bubbletea) as Example 
- [ ] Copy and paste the section from [scrapy](https://github.com/scrapy/scrapy) as Example 
- [ ] Copy and paste the section from [black](https://github.com/psf/black) as Example 

- Example 1: Zipzod
  ````
  ## 🤝 Contributing
  
  ### Clone the repo
  
  ```bash
  git clone https://github.com/xyz/zipzod@latest
  cd zipzod
  ```
  
  ### Build the project
  
  ```bash
  go build
  ```
  
  ### Run the project
  
  ```bash
  ./zipzod -i ./input -o ./output.zip
  ```
  
  ### Run the tests
  
  ```bash
  go test ./...
  ```
  
  ### Submit a pull request
  
  If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.
  ````

- Example 2:

- Example 3:

- Example 4:
