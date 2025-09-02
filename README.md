# Deno Echo Server

A simple Deno HTTP server that echoes back the GET query parameter named "string".

## Features

- HTTP server running on port 8000
- Echoes back the value of the "string" query parameter
- Returns a 400 error if the "string" parameter is missing

## Prerequisites

- [Deno](https://deno.land/) installed on your system

## Running the Application

### Start the server:

```bash
deno run --allow-net main.ts
```

Or use the npm-style script:

```bash
deno task start
```

### Development mode (with auto-reload):

```bash
deno task dev
```

## Usage

Once the server is running, you can test it with:

```bash
# Basic echo
curl "http://localhost:8000/?string=Hello%20World"

# With special characters
curl "http://localhost:8000/?string=Hello%20%26%20Welcome!"

# Missing parameter (will return 400 error)
curl "http://localhost:8000/"
```

## Example Responses

**Success (200):**

```
Hello World
```

**Error (400):**

```
Missing 'string' query parameter
```

## API Endpoint

- **URL:** `GET /`
- **Query Parameters:** `string` (required)
- **Response:** The value of the `string` parameter as plain text
- **Error:** 400 Bad Request if `string` parameter is missing
