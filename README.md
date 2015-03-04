# jQuery Linkify
#### by [Planet Telex][1]

![4]
A jQuery plugin to quickly and easily wrap plain text URLs and IP addresses in HTML a tags.
#### [View Demos and Complete Documentation][2]

#### Requirements:
* jQuery 1.6+

#### Features:

* Identifies links without needing a protocol prefix like "http://".
* Identifies MAILTO links.
* Identifies IP addresses.


#### Quick Start:


##### Step 1

Include jQuery and jQuery Linkify:

	<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
	<script type="text/javascript" src="js/jquery-linkify.min.js"></script>

##### Step 2

Have text with URLs or IP addresses in your HTML:

	<div id="content">
        <h3>Text to be Linkified</h3>
        <p>
            It doesn't matter if the URLs included in the text have the schema included, as in http://www.google.com or not,
            as in www.planettelex.com . jQuery Linkify will also recognize IP addresses in links, such as ftp://127.0.0.1.
        </p>
        <p>
            In addition to HTTP, HTTPS, and FTP URLs, jQuery Linkify will also recognize and link MAILTO links, such as:
            mailto:someone@email.com.
        </p>
    </div>

##### Step 3

Add the JavaScript to linkify the text in the HTML container:

    <script type="text/javascript">
        $(function () {
			$("#content").linkify({ target: "_blank" });
    	});
    </script>

[See the demo in action][3] for a complete example.

#### License

##### Major Components:

* jQuery: MIT/GPL license

##### Everything Else:

    Copyright 2015 Planet Telex, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

[1]: http://www.planettelex.com
[2]: http://www.planettelex.com/products/jquery-linkify
[3]: http://planettelex.github.io/jquery-linkify
[4]: http://planettelex.github.io/jquery-linkify/images/demo.png
