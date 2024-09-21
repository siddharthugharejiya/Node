const http = require('http');

const server = http.createServer((req, res) => {
   
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 0; 
                    padding: 0; 
                    box-sizing: border-box;
                }

                .navbar {
                    height: 100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    background-color: #f4f4f4;
                    border: 1px solid red;
                }

                .logo {
                    height: 100px;
                    width: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid red;
                    font-size: 24px;
                    font-weight: bold;
                    background-color: #fff;
                }

                ul {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    width: 80%;
                    justify-content: flex-start;
                    align-items: center;
                    height: 100%;
                }

                ul li {
                    margin-left: 20px;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                }

                ul li a {
                    text-decoration: none;
                    color: #333;
                }

                ul li a:hover {
                    color: #007BFF;
                }
            </style>
        </head>
        <body>
          <div class="navbar">
            <div class="logo">
              LOGO
            </div>
            <ul>
              <li> <a>Home</a> </li>
              <li> <a>About</a> </li>
              <li> <a>Services</a> </li>
              <li> <a>Contact</a> </li>
            </ul>
          </div>
        </body>
        </html>
    `);
});

server.listen(9595, () => {
    console.log('Server is running');
});
