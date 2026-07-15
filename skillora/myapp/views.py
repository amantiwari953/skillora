from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import ExtendedUser
from django.contrib.auth.decorators import login_required

from .models import Question


# Home Page
def home(request):
    return render(request, 'index.html')


# Signup Page
def signup_page(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        address = request.POST['address']

        # check if username already exists
        if User.objects.filter(username=username).exists():
            return render(request, 'signup.html', {
                'error': 'Username already exists'
            })

        # create user
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        # save extended user
        ExtendedUser.objects.create(
            user=user,
            address=address
        )

        return redirect('/login/')

    return render(request, 'signup.html')


# Login Page
def login_page(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            return redirect('/')

        else:
            return render(request, 'login.html', {
                'error': 'Invalid username or password'
            })

    return render(request, 'login.html')


# Logout
def logout_page(request):
    logout(request)
    return redirect('/')



@login_required(login_url='login')
def profile_page(request):
    profile = ExtendedUser.objects.get(user=request.user)

    context = {
        'profile': profile
    }

    return render(request, 'profile.html', context)





@login_required(login_url='login')
def copa(request):
    return render(request, 'copa.html')


def electrician(request):
    return render(request, 'electrician.html')


def fitter(request):
    return render(request, 'fitter.html')


def turner(request):
    return render(request, 'turner.html')

def steno(request):
    return render(request, 'steno.html')

def employee(request):
    return render(request, 'employee.html')


# def msword_test(request):

#     questions = Question.objects.filter(
#         trade="COPA",
#         chapter="MS Word"
#     )[:20]

#     score = None

#     if request.method == "POST":

#         score = 0

#         for q in questions:

#             user_answer = request.POST.get(str(q.id))

#             if user_answer == q.answer:
#                 score += 1

#     return render(request, 'test.html', {
#         'questions': questions,
#         'score': score
#     })
# views.py

def trade_test(request, trade, chapter):

    questions = Question.objects.filter(
        trade=trade,
        chapter=chapter
    )[:20]

    score = None
    correct = 0
    incorrect = 0
    skipped = 0
    percentage = 0
    pass_status = False

    question_results = []

    if request.method == "POST":

        score = 0

        for q in questions:

            user_answer = request.POST.get(str(q.id))

            # Skipped Question
            if not user_answer:

                skipped += 1

                question_results.append({
                    'question': q.question,
                    'selected': 'Not Attempted',
                    'correct_answer': q.answer,
                    'is_correct': False
                })

            # Correct Answer
            elif user_answer == q.answer:

                score += 1
                correct += 1

                question_results.append({
                    'question': q.question,
                    'selected': user_answer,
                    'correct_answer': q.answer,
                    'is_correct': True
                })

            # Incorrect Answer
            else:

                incorrect += 1

                question_results.append({
                    'question': q.question,
                    'selected': user_answer,
                    'correct_answer': q.answer,
                    'is_correct': False
                })

        # Percentage Calculation
        total_questions = len(questions)

        if total_questions > 0:
            percentage = round((score / total_questions) * 100)

        # Pass / Fail
        pass_status = percentage >= 40

    return render(request, 'test.html', {
        'questions': questions,
        'score': score,
        'correct': correct,
        'incorrect': incorrect,
        'skipped': skipped,
        'question_results': question_results,
        'percentage': percentage,
        'pass_status': pass_status,
        'trade': trade,
        'chapter': chapter
    })







def copa_cbt(request):
    return render(request,"copa_cbt.html")

def steno_cbt(request):
    return render(request,"steno_cbt.html")


def employee_cbt(request):
    return render(request,"employee_cbt.html")