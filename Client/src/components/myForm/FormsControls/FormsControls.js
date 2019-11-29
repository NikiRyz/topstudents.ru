import React from 'react'
import styles from './FormsControls.module.scss'

export const Input = ({input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}