# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema[7.0].define(version: 2022_10_13_041244) do
  create_table "bloggers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
=======
ActiveRecord::Schema[7.0].define(version: 2022_10_12_204655) do
  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.integer "blogger_id"
>>>>>>> 984d528ac0d5b231b4ed55781dc0ec5aade35e8e
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
