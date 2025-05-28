// roles
export const roles = ["Administrador", "Vendedor", "Supervisor"];

// marcas
export const brands = [
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "Apple",
  "Microsoft",
  "MSI",
  "Razer",
  "Samsung",
  "Xiaomi",
  "Huawei",
  "Motorola",
  "Oppo",
  "Realme",
  "OnePlus",
  "Nokia",
  "Sony",
  "JBL",
  "Bose",
  "Beats",
  "Skullcandy",
  "Sennheiser",
  "Logitech",
  "HyperX",
  "Epson",
  "Canon",
  "Brother",
  "Lexmark",
  "Nikon",
  "Panasonic",
  "Fujifilm",
  "GoPro",
  "Intel",
  "AMD",
  "NVIDIA",
  "Gigabyte",
  "Corsair",
  "Kingston",
  "Crucial",
  "EVGA",
  "Western Digital",
  "Seagate",
  "Thermaltake",
];

// estado de venta
export const statusSales = ["Pendiente", "Pagada", "Cancelada", "En revisión"];

// alertas
export const alertTypes = [
  "bajo_stock", // Cuando el stock de un producto es bajo
  "meta_venta", // Cuando se alcanza una meta de ventas
  "caida_ventas", // Cuando las ventas de un producto o globales disminuyen
  "nuevo_producto", // Cuando se registra un nuevo producto (opcional)
  "producto_inactivo", // Cuando un producto se desactiva
  "stock_agotado", // Cuando el stock llega a cero
];

// tipo de identifiación
export const identificationTypes = ["DNI", "CE", "RUC", "PASAPORTE"];

// tipo de reportes
export const reportTypes = [
  "VentasDiarias",
  "VentasMensuales",
  "VentasAnuales",
  "VentasPorProducto",
  "VentasPorCategoria",
  "VentasPorCliente",
  "VentasPorVendedor",
  "ComparativaMensual",
  "ComparativaAnual",
  "ProductosMasVendidos",
  "ProductosMenosVendidos",
  "StockActual",
  "AlertasDeInventario",
  "ClientesFrecuentes",
  "ResumenGeneral",
];

// formato de reportes
export const reportFormats = ["PDF", "Excel", "Grafico", "CSV", "JSON"];

// acciones
export const actions = [
  "crear producto",
  "editar producto",
  "eliminar producto",
  "crear venta",
  "editar venta",
  "eliminar venta",
  "crear cliente",
  "editar cliente",
  "eliminar cliente",
  "crear usuario",
  "editar usuario",
  "eliminar usuario",
  "login",
  "logout",
  "cambiar contraseña",
  "generar reporte",
  "exportar reporte",
  "actualizar stock",
  "activar producto",
  "desactivar producto",
  "cambiar rol usuario",
  "resetear contraseña",
  "enviar notificación",
  "crear factura",
  "editar factura",
  "eliminar factura",
];
