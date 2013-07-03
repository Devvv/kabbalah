class AddFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :subname, :string
    add_column :users, :surname, :string
    add_column :users, :text, :text
  end
end
