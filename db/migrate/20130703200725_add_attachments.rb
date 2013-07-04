class AddAttachments < ActiveRecord::Migration
  def change
    add_attachment :users, :photo
    add_attachment :articles, :photo
  end
end
