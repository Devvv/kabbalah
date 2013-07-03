class AddActiveToTables < ActiveRecord::Migration
  def change
    add_column :users, :active, :integer
    add_column :articles, :active, :integer
  end
end
