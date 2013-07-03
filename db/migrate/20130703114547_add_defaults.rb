class AddDefaults < ActiveRecord::Migration
  def change
    change_column_default :users, :text, ""
    change_column_default :users, :active, 1
    change_column_default :users, :name, ""
    change_column_default :users, :subname, ""
    change_column_default :users, :surname, ""
    change_column_default :articles, :text, ""
    change_column_default :articles, :name, ""
    change_column_default :articles, :active, 1
  end
end
