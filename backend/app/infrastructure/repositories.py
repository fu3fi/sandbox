from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import Session
from .db import Base, SessionLocal
from ..domain.models import User

class UserTable(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

class UserRepository:
    def __init__(self, db: Session | None = None):
        self.db = db or SessionLocal()

    def all(self):
        return [User(id=u.id, name=u.name) for u in self.db.query(UserTable).all()]

    def create(self, name: str) -> User:
        user_row = UserTable(name=name)
        self.db.add(user_row)
        self.db.commit()
        self.db.refresh(user_row)
        return User(id=user_row.id, name=user_row.name)
