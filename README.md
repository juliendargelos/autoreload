autoreload
==========

This is a non-jquery-dependent fork of [autoreload](https://github.com/typpo/autoreload).

autoreload is an easy-to-use command-line "automatic reload" or "live reload" script for developers.  It makes your browser reload when you edit files.  It's based on [@juliendargelos/connect-autoreload](https://github.com/juliendargelos/connect-autoreload).

Get it with yarn or npm:  `yarn global add autoreload`, `npm install -g autoreload`

# Usage

### Run autoreload

Directories or files are valid arguments.  For example, to recursively watch 3 directories and a file for changes:

```shell
autoreload js css templates/main settings.py
```

To watch everything in the current directory and below:

```shell
autoreload .
```

### Add js to your page

Once running, autoreload will print a script tag to include on your page:

```html
<script src="http://localhost:60000/autoreload.js"></script>
```

And call AutoReload.watch() to begin watching for changes:

```html
```html
<script>
  AutoReload.watch('localhost:60000'); // or some other host/port, default host: 'localhost:60000'
</script>
```

Alternatively, you can simply import autoreload from a module or an html file to automatically watch with default host, only if the current hostname is `localhost`:

```javascript
import './node_modules/autoreload/autoreload.js'
```

```html
<script src="node_modules/autoreload/autoreload.js"></script>
```

### Details

autoreload options:

```
--port, -p     Port server listens on           [default: 60000]
--exclude, -e  Regex matching files to exclude  [default: "\\.sw[poaxn]$"]
--regex_opts   Exclusion regex options          [default: "im"]
--https        Use https                        [default: false]
--key          SSL key                          [default: dummy SSL key]
--cert         SSL cert                         [default: dummy SSL cert]
```

To stop watching for changes, call `AutoReload.stop()`.

## SSL

You have three options if your development server requires SSL.

   1. Proxy the http autoreload script through your SSL-configured web server (apache or nginx).

   2. Use the `--https` option and load the script directly in your browser to accept the dummy SSL certificate.

   3. Provide your own SSL certificate using `--key` and `--cert`.

## Troubleshooting

If you get `Error: watch ENOSPC`, chances are you need to increase your filesystem watches:

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

## MIT License

```
Copyright (c) 2013 Room 77, Ian Webster
Copyright (c) 2019 Julien Dargelos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
