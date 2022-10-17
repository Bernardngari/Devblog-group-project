require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Devblog
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.api_only = true
    config.load_defaults 7.0
    
    config.middleware.use ActionDispatch::Flash

    config.middleware.use ActionDispatch::Session::CookieStore
    # This also configures session_options for use below
   config.session_store :cookie_store, key: '_interslice_session'

# Required for all session management (regardless of session_store)
  config.middleware.use ActionDispatch::Cookies

    config.middleware.use config.session_store, config.session_options
    config.middleware.use Rack::MethodOverride
    
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end



    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
