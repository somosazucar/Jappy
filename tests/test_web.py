from selenium.webdriver.common.by import By


def test_edit_and_run(driver):
    driver.implicitly_wait(10)
    driver.get('http://127.0.0.1:54991/')
    driver.find_element(By.CSS_SELECTOR, '.CodeMirror textarea')\
        .send_keys("print('Hola Mundo')")
    driver.find_element(By.ID, 'run-button').click()
    return ('Hola Mundo' in driver.find_element(By.CSS_SELECTOR, '#vmframe_cont iframe').text)
