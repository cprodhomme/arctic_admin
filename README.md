# ArcticAdmin
Simple theme for ActiveAdmin

## Installation

add the following line to your application's Gemfile:
```
gem 'font-awesome-rails'
gem 'arctic_admin'
```

## Usage

include arctic admin css

```
# active_admin.css.scss

@import "font-awesome";
@import "arctic_admin";
```

include arctic admin js

```
# active_admin.js

//= require jquery
//= require jquery_ujs
//= require active_admin/base
//= require arctic_admin
```

You can even change basic color of the theme by placing some other variables:

```
# active_admin.css.scss

$primary-color: #2dbb43;

@import "arctic_admin";
```

## Contributing

1. Fork it ( http://github.com/KMPgroup/active_skin/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request