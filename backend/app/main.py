from fastapi import FastAPI
from .infrastructure.db import Base, engine
from .presentation.api import router

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router)
