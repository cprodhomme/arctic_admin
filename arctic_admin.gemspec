Gem::Specification.new do |s|
  s.name        = 'arctic_admin'
  s.version     = '1.0.4'
  s.date        = '2017-02-05'
  s.summary     = "Arctic Admin theme for ActiveAdmin"
  s.description = "A simple theme for Active Admin"
  s.authors     = ["Clément Prod'homme"]
  s.files       = `git ls-files -z`.split("\x0")
  s.homepage    = 'https://github.com/cle61/arctic_admin'
  s.license     = 'MIT'
  s.require_paths = ["lib"]
  s.add_development_dependency "bundler", "~> 1.5"
  s.add_development_dependency "rake"
end