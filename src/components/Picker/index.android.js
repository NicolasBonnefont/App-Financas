import React from 'react';
import { View } from 'react-native';
import { Picker as Select } from '@react-native-community/picker';
import { PickerView } from './styles';

const Picker = ({ onChange, tipo }) => {
  return (
    <PickerView>
      <Select
        style={{
          width: '100%'
        }}
        selectedValue={tipo}
        onValueChange={(valor) => onChange(valor)}
      >
        <Select.Item label='Receita' value='receita' />
        <Select.Item label='Despesa' value='despesa' />

      </Select>
    </PickerView>
  );
}

export default Picker;