import { Form } from 'react-bootstrap';
import Select from 'react-select';

export function DeviseVente({ handleChangeInput, postData }) {
    const currencyOptions = [
        { value: 'DZD', label: 'Dinar algérien (DA)' },
        { value: 'EUR', label: 'Euro (€)' },
        { value: 'USD', label: 'Dollar US ($)' },
        { value: 'CAD', label: 'Dollar canadien ($)' },
        { value: 'GBP', label: 'Livre sterling (£)' },
        { value: 'JPY', label: 'Yen japonais (¥)' },
        { value: 'MAD', label: 'Dirham marocain (DH)' },
        { value: 'XOF', label: 'Franc CFA (FCFA)', }
    ];

    return (
        <Form.Group controlId="currencyInput" className="mb-3">
            <Form.Label>Devise de vente</Form.Label>
            <Select
                options={currencyOptions}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'currency',
                        value: selectedOption?.value || '',
                        type: 'text'
                    }
                })}
                name="currency"
                value={currencyOptions.find(opt => opt.value === postData?.currency) || null}
                placeholder="Sélectionnez la devise"
                className="currency-select"
                classNamePrefix="cs"
                isSearchable={true}
                noOptionsMessage={() => "Devise non disponible"}
                formatOptionLabel={({ label, symbol }) => (
                    <div className="currency-option">
                        <span className="currency-symbol">{symbol}</span>
                        <span className="currency-label">{label}</span>
                    </div>
                )}
                styles={{
                    option: (base) => ({
                        ...base,
                        display: 'flex',
                        alignItems: 'center'
                    })
                }}
            />
            <Form.Text className="text-muted">
                Devise dans laquelle le prix est fixé
            </Form.Text>
        </Form.Group>
    );
}