# properties and methods of the request
req.params  An array containing the named route parameters. 
req.query   An object containing querystring parameters (sometimes called GET parameters) as name/value pairs.
req.body    An object containing POST parameters. It is so named because POST parameters are passed in the body ofthe request, not in the URL as querystring parameters are. 
req.route   Information about the currently matched route. 
req.cookies/req.signedCookies   Objects containing cookie values passed from the client.
req.headers The request headers received from the client. 
req.accepts(types)  A convenience method to determine whether the client accepts a given type or types (optional types can be a single MIME type, such as application/json, a comma-delimited list, or an array). 
req.ip      The IP address of the client.
req.path    The request path.
req.hostname    A convenience method that returns the hostname reported by the client.
req.xhr     A convenience property that returns true if the request originated from an Ajax call.
req.protocol    The protocol used in making this request (for our purposes, it will be either http or https).
req.secure  A convenience property that returns true if the connection is secure. This is equivalent to req.protocol === 'https'
req.url/req.originalUrl     these properties return the path and querystring (they do not include protocol, host, or port).

# properties and methods of the response
res.status(code)
res.set(name, value)    Sets a response header. This is not something you will normally be doing manually.
res.cookie(name, value, [options]), res.clearCookie(name, [options])
res.redirect([status], url)
res.send(body)
res.json(json)
res.jsonp(json)
res.end()
res.type(type)
res.format(object)  This method allows you to send different content depending on the Accept request header.
res.attachment([filename]), res.download(path, [filename], [callback])  Both of these methods set a response header called ContentDisposition to attachment; this will prompt the browser to download the content instead of displaying it in a browser. 
res.sendFile(path, [options], [callback])
res.links(links)