<<<<<<< HEAD
=======
### Version 1.4.0 - December 22, 2014

- **Modal** - Modal now accepts custom dimmer settings with setting `dimmerSettings``

### Version 1.3.2 - December 17, 2014

- **Modal** - Fixed issue with modal dimmer appearing cut off in some browsers, and not hiding

### Version 1.3.0 - December 17, 2014

- **Modal/Dimmer** - Fixed issues with modal hiding during showing and showing during hiding, fixed issues with "hiding other" modals while a modal is mid-animation.

### Version 1.2.0 - December 08, 2014

- **Modal** - Fixes issues with multiple modals sometimes not closing dimmers
- **Modal** - "Hammer" clicking multiple times on a hiding dimmer no longer causes animation issues
- **Sidebar** - Fixes issue with multiple sidebars sometimes causing dimmer to close prematurely
- **Sidebar** - Dimmer can now be clicked even before sidebar has finished showing to immediately close sidebar

### Version 1.0.0 - November 24, 2014

- **Dimmer** - Dimmer will now automatically determine whether click-to-close is enabled by ``settings.on``
- **Dimmer** - Multiple dimmers can now be used on the same context with ``dimmerName``
- **Dimmer** - Dimmer variations can be specified when creating a dimmer from javascript using ``variation`` setting.

### Version 0.13.0 - Feb 20, 2014

- **Dimmer** - Dimmers are less buggy when used with ``on: 'hover``

### Version 0.10.3 - Dec 22, 2013

- **Modal** - Fixes element detatching sometimes in case where it is already inside a dimmer

### Version 0.7.0 - Oct 22, 2013

- **Dimmer** - Adds more dimmer examples, fixes settings
- **Dimmer** - Dimmer now obeys border radius of parent
- **Modal** - Optimizes dimmer init on modal to occur on modal init and not modal show

### Version 0.6.1 - Oct 15, 2013

- Fixes tests not passing for modal/dimmer

### Version 0.5.0 - Oct 10, 2013

- Fixes modal hide/show dependency issue where dimmer would not always hide modal and vice-versa

### Version 0.3.7 - Oct 8, 2013

- Dimmer can now take different durations for its show and hide

### Version 0.3.3 - Oct 2, 2013

- Fixes modal not working due to destroy teardown in dimmer Issue #153

### Version 0.2.1 - Sep 28, 2013

- Preserve 3D animations are now on by default for dimmers
- Refactored modal and dimmer components
- Fixes issues with dimmer settings sticking between separate modals with the same dimmer.

### Version 0.1.0 - Sep 25, 2013
>>>>>>> 5a902e28cf78bcad2ee9fccbdf8300b890118949
