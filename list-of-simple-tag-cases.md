# Tags, roles and states

There is a script being built to generate many, many simple test-cases. I.e. one element with an role and/or a property.

It will generate a file for:

- Each tag (80).
- Each tag with each role (2,400).
- Each tag with each state & property (800)
- Each tag with each role and each state & property (24,000)

With 80 tags, 30 roles and 11 state/properties, that is a lot of files!

Please note, these are a filtered list for generating very simple test-cases, anything which would require more than one element or dynamic functionality has been excluded.

## HTML5 Flow content that stands alone:

From http://www.w3.org/html/wg/drafts/html/master/dom.html#flow-content-1 

There may be other relevent elements, this is the starting point.

a, abbr, address, article, aside, audio, b, bdi, bdo, blockquote, br, button, canvas, cite, code, data, datalist, del, details, dfn, dialog, div, em, embed, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, i, iframe, img, input, ins, kbd, keygen, label, link,main, map, mark, math, menu, meter, nav, object, ol, ul, output, p, pre, progress, q, ruby, s, samp, script, section, select, small, span, strong, sub, sup, svg, table, template, textarea, time, u, ul, var, video, wbr, text


### Child elements to leave out for now:

- dt,dd
- li
- tbody,td,th,tfoot,thead


## Filtered Document roles

These should make sense applied to (most) HTML elements.

- article
- definition
- directory
- document
- group
- heading
- img
- math
- note
- presentation
- region
- separator

## Landmark roles

- application
- banner
- complementary
- contentinfo
- form
- main
- navigation
- search


## Filtered Widget roles

- alert
- button
- checkbox (true, false, mixed)
- dialog
- log
- marquee
- link ([href])
- status
- textbox (aria-multiline=true/false)


## Filtered States and properties

- aria-disabled (true/false)
- aria-dropeffect (copy/move/link/execute/popup/none)
- aria-expanded (true/false)
- aria-haspopup (true/false)
- aria-hidden (true/false)
- aria-invalid (grammar/false/spelling/true)
- aria-grabbed (true/false/undefined)
- aria-label ([string])
- aria-level ([integer])
- aria-live (off/polite/assertive)


# Full lists of roles / states / properties

Just for the purpose of showing how many haven't been included for these tests.

## Global states and properties

- aria-atomic
- aria-busy (state)
- aria-controls
- aria-describedby
- aria-disabled (state)
- aria-dropeffect
- aria-flowto
- aria-grabbed (state)
- aria-haspopup
- aria-hidden (state)
- aria-invalid (state)
- aria-label
- aria-labelledby
- aria-live
- aria-owns
- aria-relevant


## Widget Attributes

- aria-autocomplete
- aria-checked (state)
- aria-disabled (state)
- aria-expanded (state)
- aria-haspopup
- aria-hidden (state)
- aria-invalid (state)
- aria-label
- aria-level
- aria-multiline
- aria-multiselectable
- aria-orientation
- aria-pressed (state)
- aria-readonly
- aria-required
- aria-selected (state)
- aria-sort
- aria-valuemax
- aria-valuemin
- aria-valuenow
- aria-valuetext


## Relationship Attributes

- aria-activedescendant
- aria-controls
- aria-describedby
- aria-flowto
- aria-labelledby
- aria-owns
- aria-posinset
- aria-setsize


## Widget roles

- alert
- alertdialog
- button
- checkbox
- dialog
- gridcell
- link
- log
- marquee
- menuitem
- menuitemcheckbox
- menuitemradio
- option
- progressbar
- radio
- scrollbar
- slider
- spinbutton
- status
- tab
- tabpanel
- textbox
- timer
- tooltip
- treeitem


## Document roles

- article
- columnheader
- definition
- directory
- document
- group
- heading
- img
- list
- listitem
- math
- note
- presentation
- region
- row
- rowgroup
- rowheader
- separator
- toolbar


## Landmark roles

- application
- banner
- complementary
- contentinfo
- form
- main
- navigation
- search
