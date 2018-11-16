INTRODUCTION
------------
This module is based on the webformautoadress module.

 * Visit the project page for a full description of this module:
   https://www.drupal.org/project/webformautoaddress


REQUIREMENTS
------------
This module requires the following modules:
 * Webform: https://www.drupal.org/project/webform
 * Chaos tool suite (ctools): https://www.drupal.org/project/ctools
 * View: https://www.drupal.org/project/views

INSTALLATION
------------
  * Downloading and enabling is like any other module. If you are unfamiliar, a
    complete description on installing modules can be found at
    https://www.drupal.org/documentation/install/modules-themes


CONFIGURATION
-------------
 * On each 'webform node' component(s) can be added of the type 'Address
   (autocomplete)'. More information on how to use Webform can be found at
   https://www.drupal.org/documentation/modules/webform

 * In order for the autocompletion to work, you need to obtain a valid key from pro6pp.

 * You can add this key globally at /admin/config/content/autocomplete_postcode/settings

 * Visit the 'webform node' to see the Webform Auto Address component in action

 * If you want to prefill the autocomplete postcode field from a previously set postcode, add a 'postcode-coupled' to thats field wrapper
