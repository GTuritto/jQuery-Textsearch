# jQuery Textsearch plugin
### Written by Sankho Mallik for HUGE, inc
### smallik@hugeinc.com
### Thanks to Rob La Placa, Michael Adamek, and Tim McDuffie for contributing

## What does it do?
Provides an easy way to search for text within a jQuery object. Rather than doing exact matches e.g. string === $('obj').text(), it searches for the words individually. There will probably be an option added later for exact matches.

## How do I use it?
Like so:

    $('p').textsearch({
        searchVal   : 'words to search for',
        callback    : function(obj, match) {
            // obj   : the individual object that was compared
            // match : true or false boolean value on whether a match was found or not
            
        }
    })
    
The example is much more helpful! More updates later. Cheers!