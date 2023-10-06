from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes.TipoDocumentoIdentidadRoute import TipoDocumentoIdentidadRouter
from routes.PersonaNaturalRoute import PersonaNaturalRouter
from ariadne.asgi import GraphQL
from GraphqlServer import schema
app = FastAPI(
    title="Adcode",
    description="Sistema logistico  ",
)
origins = [
    "http://localhost:5042",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_route("/gql/General", GraphQL(schema))
app.include_router(TipoDocumentoIdentidadRouter)
app.include_router(PersonaNaturalRouter)
