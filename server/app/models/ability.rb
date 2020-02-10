# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    alias_action :create, :read, :update, :destroy, to: :crud

    if user.is_admin?
      can :manage, :all
    end

    can(:crud, Character) do |character|
      character.user == user 
    end

    can(:crud, Proficiency) do |proficiency|
      proficiency.character.user == user 
    end

  end
end
