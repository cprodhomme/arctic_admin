module ActiveAdmin
  module Views
    module Pages
      class Base < Arbre::HTML::Document
        alias_method :_build_active_admin_head, :build_active_admin_head
        def build_active_admin_head
          _build_active_admin_head

          within @head do
            meta name: 'viewport', content: 'width=device-width, initial-scale=1'
          end
        end

        def build_page_content
          # build_flash_messages - move this call in the method 'build_title_bar'
          div id: "active_admin_content", class: (skip_sidebar? ? "without_sidebar" : "with_sidebar") do
            build_main_content_wrapper
            build_sidebar unless skip_sidebar?
          end
        end

        def build_title_bar
          build_flash_messages
          insert_tag view_factory.title_bar, title, action_items_for_action
        end
      end
    end
  end
end