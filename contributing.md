#Contributing

February 20, 2014 - This document will change drastically in the coming days. These are high level guidelines at the moment.


## Adding new tests
* Fork the repo and work against your fork. 
* All tests must be fully functioning examples of a specific item.
* All new test files must be standalone HTML files. See File Structure, below.
* New tests must have a related [issue](https://github.com/Open-A11y-Testing/Test-Triage/issues). Describe specifically what is needed and why.
* Issue your pull request against that specific issue. Describe the new test, including what it is intended to demonstrate and any known platform issues.

### File Structure
* Use the bare minimum markup necessary
* Use HTML5 doctype
* All markup (including CSS) must be valid.
* Use no polyfills or vendor prefixes unless **explicitly** required for the test
* Use no CSS frameworks unless **explicitly** required for the test
* JavaScript framework usage must be minimal. For instance, jQuery use is fine, but inclusion of numerous additional plugins should be limited to only whatever is necessary for the test.
* Check for any existing assets under /global-assets/ before adding your own.
