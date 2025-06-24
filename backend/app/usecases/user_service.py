from typing import List
from ..domain.models import User
from ..infrastructure.repositories import UserRepository

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    def list_users(self) -> List[User]:
        return self.repo.all()

    def create_user(self, name: str) -> User:
        return self.repo.create(name)
