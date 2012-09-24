// Copyright (C) 2011 Alex Robinson (http://alextrob.net/)
// Copyright (C) 2012 Alexander Verhaar
//
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files (the "Software"), to deal 
// in the Software without restriction, including without limitation the rights 
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
// copies of the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in 
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
// SOFTWARE.

var osList= {
	WIN : { ClassName : "mini-icon-windows", URL : "github-windows:", text : "Clone in Windows" },
	MAC : { ClassName : "mini-icon-apple", URL : "github-mac:", text : " Clone in Mac" }
};

function createCloneInOSButton() {
	// Check OS first before we do anything else. This way we can support multiple OS's.
	if ( navigator.appVersion.indexOf("Windows") > 0 ) {
		OS = "WIN";
	} else if ( navigator.appVersion.indexOf("Mac") > 0 ) {
		OS = "MAC";
	} else
		return;

	// Make sure we should really be putting a button on this page.
	if (document.getElementsByClassName(osList[OS].ClassName).length !=1 ) return;
	if (document.getElementsByClassName("native-clones").length != 1) return;

	var githubURL = osList[OS].URL+"//openRepo/" + window.location.origin + window.location.pathname;
	var nativeClones = document.getElementsByClassName("native-clones")[0];
	var link = nativeClones.getElementsByTagName("a")[0];

	link.href = githubURL;
}

createCloneInOSButton();
