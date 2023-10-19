from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes.EstadoCivilRoute import EstadoCivilRouter
from routes.PersonaNaturalRoute import PersonaNaturalRouter
from routes.TipoDocumentoentidadRoute import TipoDocumentoentidadRouter
from routes.TipoSexoRoute import TipoSexoRouter
from routes.UbigeoRoute import UbigeoRouter
from ariadne.asgi import GraphQL
from GraphqlServer import schema
app = FastAPI(
    title="Adcode",
    description="Sistema logistico  ",
)
origins = [
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_route("/gql/General", GraphQL(schema))
app.include_router(EstadoCivilRouter)
app.include_router(PersonaNaturalRouter)
app.include_router(TipoDocumentoentidadRouter)
app.include_router(TipoSexoRouter)
app.include_router(UbigeoRouter)