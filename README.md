# House-Price-Prediction-Using-Real-Estate-Data

This is a machine learning project that predicts house prices using linear regression with L2 regularization. The model was trained using a dataset of house features, and evaluated using R2, MSE, RMSE, and MAE metrics.

## Technologies Used

- Python
- Jupyter Notebook
- Scikit-learn
- Flask
- ReactJS

## Model Building

The model was built using linear regression and was tested with L1 and L2 regularization, and recursive feature elimination. L2 Regulairzation was selected as the training algorithm as it gave the most efficient results.

## Application Deployment

The application was deployed using Flask as the backend framework and ReactJS as the frontend framework. Users can input house features such as the number of bedrooms, bathrooms, and square footage, and the model will predict the house price.

## Evaluation Metrics

The model was evaluated using the following metrics:

- R2 (Coefficient of determination)
- MSE (Mean squared error)
- RMSE (Root mean squared error)
- MAE (Mean absolute error)

## Conclusion

The house price prediction model achieved an R2 score of 0.46, a mean absolute error of 0.19, a root mean squared error of 0.27, and a mean squared error of 0.073. These metrics indicate that the model has room for improvement, but it can still provide useful predictions for house prices.

## Usage

To run the project, first install the required Python packages using the following command in terminal:

``
## STEP 1:-

```
pip install -r requirements.txt

```
## STEP 2:- 
Then, start the Flask server using the following command in terminal:

```
python app.py
```

## STEP 3:-

Finally, to open the ReactJS frontend by navigating to `http://localhost:3000` in your web browser.

- First setup the frontend...

1. Go to the frontend folder using the following command:

```
cd frontend
```
2. Start the React app using the following command:

```
npm start
```

## Credits

This project was created by our group as part of a machine learning course.