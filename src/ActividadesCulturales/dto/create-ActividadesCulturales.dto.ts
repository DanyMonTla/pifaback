export class CreateActividadesCulturalesDto {
    NID_ACTIVIDAD_CULTURAL: number;
    NID_TIPO_ACTIVIDAD_CULTURAL: number;
    NID_MODALIDAD: number;
    NID_FUNCION: number;
    CNOMBRE_ACTIVIDAD_CULTURAL: string;
    BTEMATICA_GENERO?: boolean;
    DFECHA_INICIO: Date;
    DFECHA_FIN: Date;
}
