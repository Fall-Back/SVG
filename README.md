SVG
===

A pattern to include SVG's in the best possible way without penalising any particular user group.

[Demo](http://lab.gridlight-design.co.uk/svg-fallback/12.html)

HTML:
~~~~~~~~
<div class="svg  svg--fixed-height  (or-svg--fluid)">
    <a href="#" class="svg__link">
        <object type="image/svg+xml" data="your-logo.svg" height="170" class="svg__image" aria-hidden="true" tabindex="-1">
            <svg display="none">
                <image src="your-logo.png" height="170" alt="Fallback text"/>
            </svg>
        </object>
       <br /><i class="svg__fallback-text">Fallback text</i>
    </a>
</div>
~~~~~~~~