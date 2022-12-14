require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Devblog
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.api_only = true
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'https://devbugger.vercel.app', 'http://localhost:4000', 'devbugger.vercel.app'
        resource '*', :headers => :any,credentials: true, :methods => [:get, :post,:delete, :patch]
      end
    end
    # This also configures session_options for use below
   config.session_store :cookie_store, key: '_interslice_session',
   :same_site => :none, :secure => :true
# Required for all session management (regardless of session_store)
  config.middleware.use ActionDispatch::Cookies
  config.middleware.use ActionDispatch::Session::CookieStore
  config.middleware.use ActionDispatch::Flash
  config.middleware.use config.session_store, config.session_options
  config.middleware.use Rack::MethodOverride

  
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
