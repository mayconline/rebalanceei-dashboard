import {
  CurrencyInput,
  type FieldValues,
  Form,
  Input,
  type Path,
  type UseFormReturn,
} from '@/components/ui';

interface TicketFieldsProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  showName?: boolean;
  disableSymbol?: boolean;
}

export function TicketFormFields<T extends FieldValues>({
  form,
  showName = true,
  disableSymbol = false,
}: TicketFieldsProps<T>) {
  return (
    <>
      {showName && (
        <Form.Field
          control={form.control}
          name={'name' as Path<T>}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Pesquise e selecione um ativo</Form.Label>
              <Form.Control>
                <Input placeholder="RBLC3" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      )}
      <div className="grid grid-cols-5 gap-4">
        <Form.Field
          control={form.control}
          name={'symbol' as Path<T>}
          render={({ field }) => (
            <Form.Item className="col-span-3">
              <Form.Label>Ativo Selecionado</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Nenhum ativo selecionado"
                  {...field}
                  disabled={disableSymbol}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name={'grade' as Path<T>}
          render={({ field }) => (
            <Form.Item className="col-span-2">
              <Form.Label>Dê uma Nota</Form.Label>
              <Form.Control>
                <Input
                  placeholder="0 a 100"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  type="tel"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <Form.Field
          control={form.control}
          name={'quantity' as Path<T>}
          render={({ field }) => (
            <Form.Item className="col-span-2">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control>
                <Input
                  placeholder="9999"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  type="tel"
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name={'averagePrice' as Path<T>}
          render={({ field }) => (
            <Form.Item className="col-span-3">
              <Form.Label>Preço Médio</Form.Label>
              <Form.Control>
                <CurrencyInput placeholder="Preço Médio de Compra" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
    </>
  );
}
