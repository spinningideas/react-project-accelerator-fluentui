import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
// UI Kit
import { Stack, PrimaryButton, Checkbox } from '@fluentui/react/lib';
// forms
import { Formik, Form, Field } from 'formik';
import { FormikTextField } from 'formik-office-ui-fabric-react';
// components
import Card from 'components/Shared/Card/Card';
import CardItem from 'components/Shared/Card/CardItem';
import Notifications from 'components/Shared/Notifications';
// Services
import LocalizationService from 'services/LocalizationService';

function Contact(props) {
  const [locData, setLocData] = useState({});
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: props.match && props.match.params && props.match.params.name ? props.match.params.name : '',
    email: '',
    message: '',
    highpriority: false
  });

  const localizationService = LocalizationService();

  const notificationsRef = useRef(null);

  useEffect(() => {
    async function loadLocalization() {
      const locCode = localizationService.getUserLocale();
      const locDataLoaded = await localizationService.getLocalizedTextSet(
        [
          'contact',
          'contactdescription',
          'contactoptionhighprioritytext',
          'moreinfo',
          'save',
          'name',
          'email',
          'message',
          'messagedescription',
          'required',
          'success'
        ],
        locCode
      );
      setLocData(locDataLoaded);
    }
    loadLocalization();
  }, []);

  const showNotification = (message, type) => {
    notificationsRef.current.show(message, type);
  };

  const ContactForm = () => (
    <Formik
      initialValues={formData}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = locData.required;
        }
        if (!values.email) {
          errors.email = locData.required;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
          errors.message = locData.required;
        }
        return errors;
      }}
      onSubmit={(values) => {
        setFormIsSubmitting(false);
        showNotification(locData.success, 'success');
        setFormData({
          name: values.name,
          email: values.email,
          message: values.message,
          highpriority: values.highpriority
        });
      }}
    >
      {({ submitForm }) => (
        <Form>
          <Card>
            <CardItem>
              <Field name="name" component={FormikTextField} label={locData.name} required />
            </CardItem>
            <CardItem>
              <Field name="email" component={FormikTextField} label={locData.email} required />
            </CardItem>
            <CardItem>
              <Field name="message" required label={locData.message} component={FormikTextField} />
            </CardItem>
            <CardItem>
              <Field
                name="highpriority"
                required
                render={(fieldProps) => <Checkbox label={locData.contactoptionhighprioritytext} defaultChecked />}
              />
            </CardItem>
            <CardItem>
              <PrimaryButton className="ml-2" disabled={formIsSubmitting} onClick={submitForm}>
                {locData.save}
              </PrimaryButton>
            </CardItem>
          </Card>
        </Form>
      )}
    </Formik>
  );

  return (
    <Stack spacing={0}>
      <Stack.Item xs={12}>
        <Card>
          <CardItem>
            <h3>{locData.contact}</h3>
            <p>{locData.contactdescription}</p>
          </CardItem>
        </Card>
        <Stack spacing={0}>
          <Stack.Item xs={12}>
            <ContactForm />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Notifications ref={notificationsRef} />
    </Stack>
  );
}

export default withRouter(Contact);
