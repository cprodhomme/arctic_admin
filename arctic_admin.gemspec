# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'arctic_admin/version'

Gem::Specification.new do |s|
  s.name        = 'arctic_admin'
  s.version     = ArcticAdmin::VERSION
  s.summary     = "Arctic Admin theme for ActiveAdmin"
  s.description = "A responsive theme for Active Admin"
  s.authors     = ["Clément Prod'homme"]
  s.files       = Dir["{app,lib}/**/*"] + ["Readme.md", 'LICENCE.txt']
  s.homepage    = 'https://github.com/cprodhomme/arctic_admin'
  s.license     = 'MIT'
  s.require_paths = ["lib"]
  s.add_development_dependency "bundler", "~> 1.5"
  s.add_development_dependency "rake"
  s.add_dependency 'activeadmin', ['>= 1.1.0', '< 3.0']
  s.add_dependency 'jquery-rails'
  s.add_dependency 'font-awesome-sass', '~> 5.0'
end
