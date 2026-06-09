import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Group from "./Group";


@Table({
    underscored: true,
})
export default class Meeting extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Group)
    @AllowNull(false)
    @Column(DataType.UUID)
    groupId: string

    @AllowNull(false)
    @Column(DataType.DATE)
    openDate: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    closeDate: Date

    @AllowNull(false)
    @Column(DataType.STRING)
    description: string

    @AllowNull(false)
    @Column(DataType.STRING)
    room: string

    @BelongsTo(() => Group)
    group: Group
}