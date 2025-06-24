from fastapi import APIRouter, Depends
from ..usecases.user_service import UserService
from ..infrastructure.repositories import UserRepository

router = APIRouter()


def get_service() -> UserService:
    return UserService(UserRepository())


@router.get('/users')
def list_users(service: UserService = Depends(get_service)):
    return service.list_users()


@router.post('/users')
def create_user(name: str, service: UserService = Depends(get_service)):
    return service.create_user(name)
