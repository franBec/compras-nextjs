const protectedRoutes = [
    {
        "url": "/coordinaciones",
    },
    {
        "url": "/coordinaciones",
        "permiso": "COMPRAS_PG_COO_MENU"
    },
    {
        "url": "/expedientes",
        "permiso": "COMPRAS_CE_MENU"
    },
    {
        "url": "/expedientes-ue",
        "permiso": "COMPRAS_CE_UE_EXPEDIENTE_MENU"
    },
    {
        "url": "/productos",
        "permiso": "COMPRAS_PG_PD_MENU"
    },
    {
        "url": "/proveedores",
        "permiso": "COMPRAS_PV_MENU"
    },
    {
        "url": "/requisitos",
        "permiso": "COMPRAS_PG_RR_MENU"
    },
    {
        "url": "/rubros",
        "permiso": "COMPRAS_PG_RUBRO_MENU"
    },
    {
        "url": "/solicitar-producto",
        "permiso": "COMPRAS_PG_PD_UE_MENU"
    },
    {
        "url": "/tipo-asignacion",
        "permiso": "COMPRAS_PG_TA_MENU"
    },
    {
        "url": "/tipo-expediente-compra",
        "permiso": "COMPRAS_PG_TEC_MENU"
    },
    {
        "url": "/tipo-contratacion",
        "permiso": "COMPRAS_PG_TCON_MENU"
    },
    {
        "url": "/unidad-ejecutora",
        "permiso": "COMPRAS_PG_UE_MENU"
    },
    {
        "url": "/unidad-medida",
        "permiso": "COMPRAS_PG_UM_MENU"
    },
]
export default protectedRoutes;