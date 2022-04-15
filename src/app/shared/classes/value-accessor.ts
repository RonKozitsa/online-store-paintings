export class ValueAccessor {
  val = '';
  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(text: string): void {
    this.value = text;
  }
}
