class Article < ActiveRecord::Base

  attr_accessor :delete_photo
  before_validation { photo.clear if delete_photo == '1' }
  has_attached_file :photo

  paginates_per 30

end
