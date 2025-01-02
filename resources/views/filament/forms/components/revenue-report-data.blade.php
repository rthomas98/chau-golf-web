<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
>
    <div class="space-y-4">
        @if ($getState())
            <div class="rounded-lg bg-white shadow">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Report Summary</h3>
                    <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt class="truncate text-sm font-medium text-gray-500">Total Transactions</dt>
                            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                                {{ $getState()['summary']['total_transactions'] }}
                            </dd>
                        </div>
                        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt class="truncate text-sm font-medium text-gray-500">Total Revenue</dt>
                            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                                ${{ number_format($getState()['summary']['total_revenue'], 2) }}
                            </dd>
                        </div>
                        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt class="truncate text-sm font-medium text-gray-500">Total Commission</dt>
                            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                                ${{ number_format($getState()['summary']['total_commission'], 2) }}
                            </dd>
                        </div>
                        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt class="truncate text-sm font-medium text-gray-500">Average Transaction Value</dt>
                            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                                ${{ number_format($getState()['summary']['average_transaction_value'], 2) }}
                            </dd>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rounded-lg bg-white shadow">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Transaction Details</h3>
                    <div class="mt-5 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Date</th>
                                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Reference</th>
                                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                                            <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Amount</th>
                                            <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Commission</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        @foreach ($getState()['transactions'] as $transaction)
                                            <tr>
                                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">{{ $transaction['date'] }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ $transaction['reference'] }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ $transaction['type'] }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500">${{ number_format($transaction['amount'], 2) }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500">${{ number_format($transaction['commission'], 2) }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @else
            <div class="rounded-lg bg-gray-50 px-4 py-5 text-center sm:p-6">
                <p class="text-sm text-gray-500">No report data available. Generate the report to view details.</p>
            </div>
        @endif
    </div>
</x-dynamic-component> 