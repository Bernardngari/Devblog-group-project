class Blog < ApplicationRecord
    # belongs_to :blogger
    # has_many :comments, dependent: :destroy

    validates :content, {
        presence: true,
        length: {
            minimum: 30
        }
    }
end
