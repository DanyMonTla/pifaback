import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('tbl_actividades_culturales')
export class ActividadesCulturales {
    @PrimaryColumn()
    NID_ACTIVIDAD_CULTURAL: number;

    @Column()
    NID_TIPO_ACTIVIDAD_CULTURAL: number;

    @Column()
    NID_MODALIDAD: number;

    @Column()
    NID_FUNCION: number;

    @Column({ length: 300 })
    CNOMBRE_ACTIVIDAD_CULTURAL: string;

    @Column({ type: 'bit', default: 0 })
    BTEMATICA_GENERO: boolean;

    @Column({ type: 'date' })
    DFECHA_INICIO: Date;

    @Column({ type: 'date' })
    DFECHA_FIN: Date;

    @Column({ type: 'bit', default: 1 })
    BHABILITADO: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    DFECHA_ALTA: Date;

    @Column({ type: 'datetime', nullable: true })
    DFECHA_BAJA: Date | null;
}
