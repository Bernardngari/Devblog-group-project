class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :blog_id
      t.integer :blogger_id

      t.timestamps
    end
  end
end
