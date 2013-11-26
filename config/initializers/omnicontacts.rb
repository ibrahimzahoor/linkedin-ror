#check https://github.com/Diego81/omnicontacts for more info

require "omnicontacts"

Rails.application.middleware.use OmniContacts::Builder do
  
  importer :gmail, "78629845284-abfca32dr4pkevi8kl71d3u499ggps81.apps.googleusercontent.com", "n3WeZGVO0kR8qd8gaumnMhoh" , {:redirect_path => "/invites/gmail/contact_callback/"}
  
  importer :yahoo, "dj0yJmk9WEFzREpidHBJM1U5JmQ9WVdrOWR6bEViM0ZrTTJVbWNHbzlPRGswTVRBMU9EWXkmcz1jb25zdW1lcnNlY3JldCZ4PTgw", "f431c10cda2494651ba6464987e2cd75cceb43fc", {:callback_path => '/invites/yahoo/contact_callback'} 
  
  importer :hotmail, "000000004410A265", "VP9CmKCtNSq4G72kbuh-ECPJy5UmmlKl"
end
