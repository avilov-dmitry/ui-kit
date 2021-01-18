import React, { useCallback, useMemo } from 'react';
import { ClickRowParamsType, TableRowType } from './_types';
import { TablePropsType } from './_types/props-type';
import {
  getSelectedRows,
  getSelectedAllRows,
  checkAllIsChecked,
} from './_utils';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { TableHeader } from './_components/table-header';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Table';

export const Table = ({
  config,
  customDesktopRow = Row,
  // customMobileRow,
  id,
  rowIsNotClickable = true,
  onClickRow,
  onSelectRow,
  selectedIsOption = false,
  rows,
  selected = [],
  isHiddenHeader,
  isLoading,
  onSort,
  sort,
  withCheckboxes = false,
}: TablePropsType) => {
  const handleRowClick = useCallback(
    ({ row, event }: ClickRowParamsType) => {
      if (!rowIsNotClickable && onClickRow) {
        onClickRow({ row, event });
      }
    },
    [rowIsNotClickable, onClickRow],
  );

  const handleSelectRow = useCallback(
    (row: TableRowType) => {
      if (onSelectRow) {
        onSelectRow({
          selected: getSelectedRows({ row, selected, selectedIsOption }),
        });
      }
    },
    [selected, rows, selectedIsOption, onSelectRow],
  );

  const handleSelectAllRows = useCallback(() => {
    if (onSelectRow) {
      onSelectRow({
        selected: getSelectedAllRows({ selected, rows, selectedIsOption }),
      });
    }
  }, [selected, rows, selectedIsOption, onSelectRow]);

  const allIsChecked = useMemo(
    () => checkAllIsChecked({ rows, selected, selectedIsOption }),
    [rows, selected, selectedIsOption],
  );

  const isVisibleTableHeader = useMemo(
    () => Boolean(config.length && !isHiddenHeader),
    [config.length, isHiddenHeader],
  );

  const selectedIds = useMemo(
    () =>
      Array.isArray(selected)
        ? (selected as Array<any>).map((param) =>
            selectedIsOption ? param.id : param,
          )
        : [],
    [selected, selectedIsOption],
  );

  const isRowReadOnly = useMemo(
    () => Boolean(!onClickRow && rowIsNotClickable),
    [onClickRow, rowIsNotClickable],
  );

  return (
    <div className={cn(`${CLASS_NAME}__wrapper`)}>
      <div className={cn(CLASS_NAME)} id={id}>
        {isVisibleTableHeader && (
          <TableHeader
            allIsChecked={allIsChecked}
            columns={config}
            onSelectAllRows={handleSelectAllRows}
            onSort={onSort}
            sort={sort}
            tableId={id}
            withCheckboxes={withCheckboxes}
          />
        )}
        <div className={cn(`${CLASS_NAME}__body`)}>
          {rows.map((row: TableRowType) => {
            return (
              <Row
                key={row.id}
                columns={config}
                isRowReadOnly={isRowReadOnly}
                onClickRow={handleRowClick}
                onSelectRow={handleSelectRow}
                row={row}
                selected={selectedIds}
                tableId={id}
                withCheckboxes={withCheckboxes}
              />
            );
          })}
        </div>
      </div>
      {isLoading && <div>Идет загрузка данных...</div>}
    </div>
  );
};
