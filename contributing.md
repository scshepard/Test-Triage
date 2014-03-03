#Contributing
The goal of the Open Accessibility Testing effort is to get a large amount of test data relating to browser-and-assistive-technology support for existing and emerging web features. We hope for this effort to be high volume and ongoing.  In order to do that, we need two important things:

* Tests
* Participants

This document discusses how to create test files. Although the following document may appear quite restrictive, it actually isn't.  At a high level, what we want from each test is simple:

* Single HTML file for each test
* An accompanying description file
* A sensible file name

## Adding new tests
* Fork the repo and work against your fork. 
* All tests must be fully functioning examples of a specific item.
* All new test files must be standalone HTML files. See File Structure, below.
* New tests must have a related [issue](https://github.com/Open-A11y-Testing/Test-Triage/issues). Describe specifically what is needed and why. (Hint, it might be cool to look into )
* Issue your pull request against that specific issue. Describe the new test, including what it is intended to demonstrate and any known platform issues.

### File Structure
* Test files must be HTML. Do not create test files which rely on server-side preprocessing as there's no guarantee that your favorite server-side language is available.
* Use the bare minimum markup necessary for the test
* Use HTML5 doctype
* All markup (including CSS) must be valid.
* Check for any existing assets under /global-assets/ before adding your own. There is an existing global.css file which handles very basic layout and typography. Using it (or any of the other global-assets files) is purely optional. 
* Use no polyfills or vendor prefixes unless **explicitly** required for the test. 
* Use no CSS frameworks unless **explicitly** required for the test
* JavaScript framework usage must be minimal. For instance, jQuery use is fine, but inclusion of numerous additional plugins should be limited to only whatever is necessary for the test. (A copy of jquery 1.11.0 is in the global-assets folder)
* Save all files with UTF-8 encoding

### File naming and organization
All of the test files and related assets will be dumped in the same root folder as all the others. Consequently we must ensure that everything is uniquely named, in order to avoid conflicts.

* All test files must be accompanied with a description file.
* All file names **must** adhere to the following naming convention. Pull requests that do not follow this convention will be rejected, because the test system requires it:
  * HTML file name (test file): ```feature-creatorname.html```, for example: ```aria-hidden-karlgroves.html```. We use this convention so that it is obvious what the feature is that is being tested and who created it, in case we have questions later. It is best to use your Github username
  * HTML file name (description file): basically the exact same as  the test file, with 'description' appended: ```feature-creatorname-description.html```, for example: ```aria-hidden-karlgroves-description.html```
  * All associated assets such as CSS or JavaScript should follow the same convention. For instance, any custom CSS would be ```feature-creatorname.css``` for example: ```aria-hidden-karlgroves.css```. 
  * We heartily advise that your image names follow the same convention.
  
## Helpful Hints
* Please test your own work before issuing a pull request. Due to the expected volume of tests, it is likely we'll only give the tests a quick throttle. If anything looks "off" we'll probably reject it with a terse message saying it is broken.
* Related to the above, you should possibly run your HTML through the [HTML Validator](http://validator.w3.org/), your CSS through the [CSS Validator](http://jigsaw.w3.org/css-validator/) and use [JSHint](http://www.jshint.com/install/) and/ or [JSLint](http://www.jslint.com/) on your JavaScript.

Note: it is entirely possible that we will eventually create an automated build process to do some of the above validation and linting ahead of time, so please try to facilitate future sustainability by doing this on your own first.